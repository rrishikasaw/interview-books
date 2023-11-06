# POST `/books`

## Request Body

```ts
{
  title: string,
  author: string,
  summary: string
}
```

## Response Body

```ts
{
  book: Book
}
```

## Description

- Creates a new book and returns its details

---

# GET `/books`

## Request Query

```ts
{
  limit: number
  page: number
  search: string   // title, description, author
  createdAtMin: Date
  createdAtMax: Date
  updatedAtMin: Date
  updatedAtMax: Date
  sortBy: 'createdAt' | 'updatedAt'
  sortOrder: 'ascending' | 'descending'
}
```

## Response Body

```ts
{
  books: Book[],
  count: number
}
```

## Description

- Returns the list of books as per the query
- `search` will search from `title`, `description` and `author`
- Added pagination, searching, sorting

---

# GET `/books/:id`

## Response Body

```ts
{
  book: Book
}
```

## Description

- Returns book details if found

---

# PATCH `/books/:id`

## Request Body

```ts
{
  title?: string,
  author?: string,
  summary?: string
}
```

## Description

- Update book details

---

# DELETE `/books/:id`

## Description

- Deletes a book