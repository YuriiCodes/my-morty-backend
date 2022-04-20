# Welcome to MyMorty api!
https://my-morty-backend.herokuapp.com/,
http://localhost:8000/ (if started locally)

- **/api/banks** [method=GET] → Returns all banks

- **/api/banks/:bankID** [method=GET] → Returns bank info with given id

- **/api/banks/:bankID** [method=DELETE] → Delete bank with given id

- **/api/banks/ [method=POST]** → Add new bank, info about it must come in request body. Here is an example the right request body:

```jsx
{
    "name": "test",
    "interestRate": 120,
    "maxLoan": 50000,
    "minDownPayment": 30000,
    "loanTerm": 12
}

```

-   **/api/banks/** [method=PUT]  → Change info about already existing bank. Updated bank info must come in request body. Here is an example of the right request body with updated bank info:
```jsx
{
    "name": "testUPDATED",
    "interestRate": 7,
    "maxLoan": 120000,
    "minDownPayment": 40000,
    "loanTerm": 24
}

```
