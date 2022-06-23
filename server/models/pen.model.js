module.exports = (mongoose) => {
  const PenSchema = mongoose.model(
    "pen_record",
    mongoose.Schema(
      {
        number: Number,
      },
      { timestamps: true }
    )
  );

  return PenSchema;
};
