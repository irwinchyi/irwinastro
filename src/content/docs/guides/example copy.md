---
title: Python Quick Guides
description: Python Quick Guides
---

## List

A `list` stores different types of items in order, simplifying data organization and manipulation.

`social_platforms = ['TikTok', 'Instagram', 'Facebook']`

## Tuples 元组

**Tuples** are ordered collections that cannot be  changed once created. They are ideal for storing fixed data that  shouldn't change (e.g., coordinates, RGB color values).

```python
tuple_example = (1, '2', True)
navy_blue = (0, 0, 128)
# valid tuple
t1 = ('a',)
# valid tuple
t2 = 'a',
# NOT a tuple
t3 = ('a')
```

Create 3 tuples for your friends, each with the latitude and longitude of the cities they live in.

```python
friends = (
  (37.7749, -122.4194), 
  (40.7128, -74.0060), 
  (4.624335, -74.063644)
)
```

## Dictionaries

**Dictionaries** are unordered collections that allow you to store and access data with `key`:`value` pairs.

```python
# single line
dictionary = {key: value}

# multi-line
dictionary = {
  key1: value1,
  key2: value2,
  key3: value3
}
```

Dont forget : and , in the end. 

## Sets

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Union of sets
union_result = set1.union(set2)

# Intersection of sets
intersection_result = set1.intersection(set2)

# Difference of sets
difference_result = set1.difference(set2)

print(union_result)
print(intersection_result)
print(difference_result)

# Output:
# {1, 2, 3, 4, 5, 6}
# {3, 4}
# {1, 2}
```

### Modify Multiple Laywers

```python
players = [
    {
        'name': 'Irwin',
        'position': 'Forward',
        'Jersey number': 10,
    },
    {
        'name': 'Owen',
        'position': 'Defender',
        'Jersey number': 20,
    },
    {
        'name': 'Ali',
        'position': 'Midfielder',
        'Jersey number': 20,
    }
]

# To print all positions
print(players[0])
players[0]['name'] = 'Irwin 2'
players[0]['position'] = 'pending'
print(players[0])
```

## File Handling

```python
# This opens example file for writing
file = open(file_path, mode)
file.write('text')
```

- `'r'` for reading a file. 📖
- `'w'` for writing to a file. ✍🏼
- `'a'` for writing from the end of a file. 📝

The `.readline()` method lets you read a file one line at a time:

In Python, the `.close()` method is used to finish working with a file and free up resources.

### CSV Files

```python
import csv

# Open the CSV file in 'read' mode
with open('example.csv', 'r') as file:
  # Create a CSV reader object
  csv_reader = csv.reader(file)

  for row in csv_reader:
    print(row)
```

#### Writing to CSV Files

```python
import csv

# Data to be written to the CSV file
data_to_write = [
  ['Name', 'Age', 'Grade'],
  ['Alice', 25, 'A'],
  ['Bob', 22, 'B'],
  ['Charlie', 28, 'A+']
]

# Open the CSV file in 'write' mode
with open('output.csv', 'w', newline='') as file:
  # Create a CSV writer object
  csv_writer = csv.writer(file)

  # Write the data to the CSV file
  csv_writer.writerows(data_to_write)
```

