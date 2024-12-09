# API Design Notes

## Start a Match

Registers a new match.

**Endpoint**:  
`POST /api/games`

---

## Display the Current Board State & Check the Winner

Retrieves the specified turn of the latest match.

**Endpoint**:  
`GET /api/games/latest/turns/{turnCount}`

**Response Body**:

```json
{
  "turnCount": 1,
  "board": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "nextDisc": 1,
  "winnerDisc": 1
}
```

## Place a Stone

Register a "turn".

**Endpoint**:  
`POST /api/games/latest/turns`

**Request Body**:

```json
{
  "turnCount": 1,
  "move": {
    "disc": 1,
    "x": 0,
    "y": 0
  }
}
```

## View My Match Results

Retrieve a list of "games".

**Endpoint**:  
`GET /api/games`

**Response Body**:

```json
{
  "games": [
    {
      "id": 1,
      "winnerDisc": 1,
      "startedAt": "YYYY-MM-DD hh:mm:ss"
    },
    {
      "id": 2,
      "winnerDisc": 1,
      "startedAt": "YYYY-MM-DD hh:mm:ss"
    }
  ]
}
```
