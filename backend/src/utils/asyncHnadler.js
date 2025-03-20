const asyncHandler = (requestHandler) => {
  async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

export { asyncHandler };
// or
// export default asyncHandler;

// const asyncHandler = (requestHandler)=> { async (req, res, next)=>{
//     try {
//         await requestHandler(req, res, next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message: err.message || "An unknown error occurred!"
//         });
//     }
// }}
