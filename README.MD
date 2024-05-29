NODE JS - Redis

To Run Redis on Docker:

docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

-d means detached mode. To Run in background

6379 and 8001 are exposes

To Run :

docker exec -it 1798e7feac40 bash

redis-cli                      This will open Redis CLI

— To Set some key value

set name:1 Anand 

This will set a key name with id 1 and value Anand

nx will store the value if the key does not already exist. Useful for implementing 

— To get multiple values:

mget name:1 name:2 name:3 user:2 

— To set multiple values

mset name:1 val1 name:2 val2 

To increment or decrement values

set counter 0

incr counter

To create a list

lpush messages hey

- [LPUSH/RPUSH Commands](https://redis.io/commands/lpush/): The LPUSH command adds an element to the beginning of a list, while RPUSH adds it to the end. These commands are fundamental for using Redis Lists as stacks or queues. Their atomic nature ensures data integrity even when multiple clients are pushing simultaneously.
- [LPOP/RPOP](https://redis.io/commands/lpop/): LPOP removes and returns the first element, while RPOP does the same for the last element. These atomic commands are essential for implementing queue-like behavior, ensuring each item is processed by only one client in a multi-client scenario.
- [LRANGE](https://redis.io/commands/lrange/): LRANGE retrieves a range of elements from a list. This command aids in pagination, allowing the retrieval of subsets of lists for user-friendly display.
- [LINDEX Command](https://redis.io/commands/lindex/): The LINDEX command fetches an element from a list by index. Useful for accessing specific elements based on their position.
- [LREM](https://redis.io/commands/lrem/): LREM removes elements by value, handy for deleting specific items based on criteria, contributing to list maintenance.[LLEN](https://redis.io/commands/llen/): LLEN provides the list length, useful for assessing list size before performing size-sensitive operations.


To print all the elements of the list
    lrange messages 0 -1

To delete the list
    del messages