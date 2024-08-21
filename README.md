# VEE

VEE (Value Evaluation Expression) is a lightweight and flexible expression
evaluation engine designed for JSON-based data structures. With VEE, you can
define custom expressions that evaluate results by feeding in JSON values,
making it easy to implement dynamic logic, filtering, and data transformation
within your applications.

### Number Expression

```typescript
vee('{{10+20*30}}')({}) === '610';
```

### Value Extraction

```typescript
vee('{{foo.bar}}')({ foo: { bar: 'result' } }) === 'result';
```
