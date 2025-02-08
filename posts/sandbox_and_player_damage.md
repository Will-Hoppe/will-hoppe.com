---
title: "Sandbox Level and Player Damage System"
date: "2024-02-08"
---

This week I started building a sandbox environment to build and try level ideas. I started by deciding what are the most essential tile types, and created a tileset to represent them.

![](/images/SandboxTesting.png)

I included a lot of the most basic tile types, such as basic tiles, grapple-able tiles, grapple-able but not physical tiles, damaging tiles, bouncy tiles, moving platforms, one-way platforms, and water.

These tiles are given special characteristics based on their collision layer in Godot. 

Another large development was the creation of my damage and knockback system. Since this game won’t have a health bar or player lives, the main challenge will movement-based platforming and puzzles. When the player is damaged, their velocity changes, they are knocked back, and movement is uncontrolled for a bit. 

![](/images/FroggyDamage.gif)

Here is a basic overview of how the knockback system works. Every physics process loop, I check all the objects that the player is colliding with (which won’t be that many, so it’s not inefficient). If any of those are objects meant to damage the player, I call my take_hit functions, which takes the location of the collision object as a parameter. Depending on its location relative to the player location, it applies a force in the opposite x-direction.

I ran into a large problem with applying this to tiles, as when you collide with a tile, it’s “collider position” is at the center of the entire tileset, not just the single tile you collided with. So if you are colliding with a tile, it instead uses the direction you were traveling in and knocks you backwards.

```python
func take_hit(hit_source: Vector2) -> void:
	call_camera_shake(180)
	# Calculate a knockback vector away from the hit source.
	# (Subtracting the hit source from the frog’s position gives the direction)
	var knock_direction = Vector2((position - hit_source).normalized().x, 0)
	
	moved_since_hit_flag = false
	hit_state_enabled = true
	
	if tongue.hooked or tongue.flying:
		tongue.release()
	# apply knockback force
	velocity = knock_direction * hit_knockback_force
	hit_knockback_multiplier = 1
	# disable normal movement while the hit effect is active
	controls_enabled = false
	
	# start the hit recovery timer to re-enable movement after hit_recovery_time seconds
	if hit_timer.is_stopped():
		flash_effect()
	hit_timer.start()
	
	# USED FOR DEBUGGING POSITIONAL RELATION BETWEEN PLAYER AND COLLIDER
	
	#var debug_line = load("res://scripts/DebugLine.gd").new()
	#debug_line.start_pos = position
	#debug_line.end_pos = hit_source
	#get_tree().current_scene.add_child(debug_line)

```

As you can see above, I also added some new visuals for when the player takes damage. When the player is in the damaged state, it flashes red using Godot’s modulation feature.

For the camera, I added some screen shake to intensify the feeling of impact. Here is the code for that:

```python
extends Node2D

@export var player: CharacterBody2D
@export var follow_speed: float = 3.5
@onready var camera = $Camera2D

@export var shake_decay: float = 4.0
var shake_strength: float = 0.0

func _ready() -> void:
	if player:
		player.camera = self
		
func _process(delta: float) -> void:
	if player:
		var target_position = player.global_position

		# If we're shaking, add a random offset.
		var shake_offset = Vector2.ZERO
		if shake_strength > 0.0:
			shake_offset = Vector2(
				randf_range(-shake_strength, shake_strength),
				randf_range(-shake_strength, shake_strength)
			)
			# Reduce the shake strength over time.
			shake_strength = lerp(shake_strength, 0.0, shake_decay * delta)
		
		# Smoothly move the camera toward the player's position plus the shake offset.
		global_position = global_position.lerp(target_position + shake_offset, follow_speed * delta)

func camera_shake(amount: float) -> void:
	shake_strength = max(shake_strength, amount)
```