# VEE

VEE (Value Evaluation Expression) is a lightweight and flexible expression
evaluation engine designed for JSON-based data structures. With VEE, you can
define custom expressions that evaluate results by feeding in JSON values,
making it easy to implement dynamic logic, filtering, and data transformation
within your applications.

## Introduction

### Number Expression

```typescript
vee('{{10+20*30}}')({}) === '610';
```

### Value Extraction

```typescript
vee('{{foo.bar}}')({
  variables: { foo: { bar: 'result' } },
}) === 'result';

vee('{{foo["bar"]}}')({
  variables: { foo: { bar: 'result' } },
}) === 'result';
```

### Function Expression

```typescript
vee('{{fn("yoo","shi")}}')({
  variables: {
    fn: (...names: string[]) => 'Hello ' + names.join(', ') + '.',
  },
}) === 'Hello yoo, shi.';
```

### Pipe Function Expression

```typescript
vee('{{"yoo"|fn:"shi"}}')({
  variables: {
    fn: (...names: string[]) => 'Hello ' + names.join(', ') + '.',
  },
}) === 'Hello yoo, shi.';
```

## Builtin Functions

### upper()

It can convert the value to upper case.

```typescript
vee('{{"hello"|upper}}')().should.be.equals('HELLO');
vee('{{123|upper}}')().should.be.equals('123');
```

## Set Globals

### global functions

It can set global functions for convenient.

```typescript
SetupVee({
  functions: {
    globalFoo: (val: string) => `bar(${val})`,
  },
});

vee('Name {{date|globalFoo}} DONE', { log })({
  variables: { date: 'Jan 1, 2000' },
}).should.be.equals('Name bar(Jan 1, 2000) DONE');
```
