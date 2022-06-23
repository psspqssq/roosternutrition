module.exports = (mongoose) => {
  const RoosterSchema = mongoose.model(
    "rooster_record",
    mongoose.Schema(
      {
        name: String,
        age: Number,
        height: Number,
        alphakey: String,
      },
      { timestamps: true }
    )
  );

  return RoosterSchema;
};
