module.exports = (mongoose) => {
  const PenSchema = mongoose.model(
    "pen_record",
    mongoose.Schema(
      {
        number: Number,
        roosters: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "rooster_record",
          },
        ],
      },
      { timestamps: true }
    )
  );

  return PenSchema;
};
