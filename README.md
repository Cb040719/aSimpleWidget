# aSimpleWidget

This app was built using `Redux Toolkit`, `Redux-Toolkit-Query`, `ViteJS` and `TailwindCSS`. It is a resume card about a wine.

The code imports the `useGetWinesByNameQuery` function from the services/wines file. This function is used to query the API for wines by name. The `Card` component is then used to display the data returned from the API. If an error occurs while querying, a message will be displayed instead of the `Card` component. If the query is still loading, a `CardSkeleton` component will be displayed instead of the `Card` component.

The `App` component also logs any comments associated with each wine in the `console`.
