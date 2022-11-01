const queryRequiresVariable = ({ variableName, operation }) =>
  operation.query.definitions?.some(({ variableDefinitions }) =>
    variableDefinitions?.some(
      ({ variable }) => variable.name.value === variableName
    )
  );
export default queryRequiresVariable;
