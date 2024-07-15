# Composing components kata

This kata is about composing components. A good composition of components has several benefits:

- **Reusability**: By breaking down our UI into smaller components, we can reuse these components across our application. This leads to less code duplication and makes our code **easier to maintain and test.**
- **Performance**: Each time a component's state or props change, the component re-renders. If a parent component re-renders, all the child components also re-render. This can lead to unnecessary re-renders and negatively impact performance.
- **Scalability**: Components can be composed to create more complex components. This makes it easier to scale our application as it grows.

## The task

In this kata, you will refactor a simple Ecommerce Card component and the goal is to make it more reusable and performant.

Take into account the following requirements:
- All components must be wrapped with `withRenderCount` HOC. It is important to evaluate in the test if the solution is correct.
- Refactor only files in `components/EcommerceCard` and do not edit files in `src/locked` folder.
- Run test in order to check if your refactor is correct.

## Goals

The test will ensure that:

- Max of 8 renders for initial render
- Max of 8 renders when changing size
- Max of 23 renders if we force a re-render of all components

Make the test pass by refactoring the EcommerceCard component.


## Interesting resources

- https://www.patterns.dev/react/compound-pattern/
- https://kentcdodds.com/blog/compound-components-with-react-hooks
- https://legacy.reactjs.org/docs/composition-vs-inheritance.html
- https://dev.to/ricardolmsilva/composition-pattern-in-react-28mj
- https://www.dhiwise.com/post/composing-components-in-react-building-blocks-for-apps#performance-considerations-in-composition
