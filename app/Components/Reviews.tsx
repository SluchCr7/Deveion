import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { Review } from "../utils/Types";



// البيانات
const reviews : Review[] = [
  { id: 1, name: "Jasica Doe", img: "/u1.jpg", review: "Amazing product! Highly recommend it.", rating: 4.5 },
  { id: 2, name: "John Smith", img: "/u2.jpg", review: "Very useful and easy to use.", rating: 4 },
  { id: 3, name: "Alice Johnson", img: "/u3.jpg", review: "Good value for money.", rating: 4.2 },
  { id: 4, name: "Robert Brown", img: "/u4.jpg", review: "Could be improved in some areas.", rating: 3.5 },
];

// مكون لتوليد النجوم بناء على rating
const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-yellow-500" />);
    }
  }
  return <div className="flex items-center gap-1">{stars}</div>;
};

// مكون كرت مراجعة
const ReviewCard = (
  {
    name, img, review, rating
  }: {
    name: string; img: string; review: string; rating: number
  }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
    <img src={img} alt={name} className="w-20 h-20 rounded-full object-cover mb-4" />
    <h3 className="font-semibold text-lg mb-2 text-black">{name}</h3>
    <RatingStars rating={rating} />
    <p className="text-gray-600 mt-3">{review}</p>
  </div>
);

// المكون الرئيسي
const Reviews = () => {
  return (
    <div id="reviews" className="flex flex-col items-center justify-center py-16 px-4">
      {/* العنوان والفقرة */}
      <div className="max-w-3xl text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Powerful Features to Help You Scale</h2>
        <p className="text-gray-600">
          Discover all the intelligent tools designed to boost productivity, automate workflows, and elevate your business performance.
        </p>
      </div>

      {/* شبكة المراجعات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {reviews.map((rev : Review) => (
          <ReviewCard
            key={rev.id}
            name={rev.name}
            img={rev.img}
            review={rev.review}
            rating={rev.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
