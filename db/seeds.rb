MX = 10
MOVIES = []

MX.times do
  MOVIES << Movie.create(
                  title:         Faker::Name.first_name,
                  release_date:  Faker::Date.between(20.years.ago, 5.years.ago))
end

MOVIES.each do |m|
  MX.times do
    Review.create(
          reviewer_name:    Faker::Name.name,
          title:            Faker::Name.first_name,
          review_text:      Faker::Hipster.paragraph,
          review_date:      Faker::Date.between(4.years.ago, Date.today),
          movie_id:         m.id)
  end
end
