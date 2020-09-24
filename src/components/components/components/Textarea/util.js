const invalidProps = ({ invalid, errorId }) => ({
    "data-invalid": invalid,
    "aria-invalid": invalid,
    "aria-describedby": errorId,
  });
  
  export const textAreaProps = ({ invalid, sharedTextAreaProps, errorId }) => ({
    ...sharedTextAreaProps,
    ...(invalid ? invalidProps({ invalid, errorId }) : {}),
  });
  