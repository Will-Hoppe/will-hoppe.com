---
title: "Collectibles and Tutorial Beginnings"
date: "2024-02-12"
---

This week I worked on collectible items started designing the tutorial level. For collectibles, I added bubbles and power-ups through the Godot TileMapLayer feature, so they can be placed like tiles but treated like individual scenes. This saves you the trouble of copying a bunch of instances of each object and manually placing them in the level.

I had to write some code that replaces tiles with their corresponding scenes:
```python
extends TileMapLayer

@export var TILE_SCENES: Dictionary = {
	Vector2(0,0): preload("res://Objects/bubble.tscn"),
	Vector2(0,1): preload("res://Objects/stickyFeet.tscn"),
	Vector2(0,2): preload("res://Objects/megaJump.tscn"),
}

var search_layer := 0

func _ready():
	await get_tree().process_frame
	_replace_tiles_with_scene()

func _replace_tiles_with_scene(scene_dictionary: Dictionary = TILE_SCENES):
	for key in scene_dictionary.keys():
		for tile_pos in get_used_cells_by_id(1, key):
			var object_scene = scene_dictionary[key]
			_replace_tile_with_object(tile_pos, object_scene)

func _replace_tile_with_object(tile_pos: Vector2, object_scene: PackedScene):
	# Clear the cell in TileMap
	if get_cell_source_id(tile_pos) != -1:
		set_cell(tile_pos, -1)
	
	#Spawn the object	
	if object_scene:
		var obj = object_scene.instantiate() as Node2D
		var ob_pos = map_to_local(tile_pos)
		add_sibling(obj)
		obj.global_position = to_global(ob_pos)

```

I decided on bubbles instead of coins because I think coins are too basic and bubbles are always satisfying to pop. You can even pop them with your tongue which I think will be a lot of fun. I already have flies that you can catch in the game, but I wanted another form of collectible points because they are good tools to guiding the player towards the right path.

![](/images/FroggyBubbles.gif)

For power-ups, I added sticky feet and mega jump, which were features I planned to initially have as part of the player’s default move-set, but I realized it would give them too much freedom in movement. The sticky feet allows you to stick to some walls. It runs on a timer but mega jumps are consumed after a single use. Both power-ups respawn after they are used, and I envision that certain platforming sections or puzzles will require you to use them in the correct manner.

![](/images/FroggyMegaJump.gif)
![](/images/FroggyStickyFeet.gif)

For the tutorial level, I want it to take place on the interior of a hollowed out log, so I worked on some textures to use. This is the kind of art I am not so good it, so it was difficult to create something that I deemed good enough. Here is some preliminary art for the level:

![](/images/FroggyTutorialFirstPic.png)

I'm planning that the tutorial level teaches basic movement controls and mechanics. Here is where you will meet the first NPC, a nice frog that found you passed out in the water the previous night and brought you into their home inside the log.