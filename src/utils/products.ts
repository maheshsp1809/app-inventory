export interface Product {
  id: number;
  icon: string;
  name: string;
  screenshots: string[];
  description: string;
  average:number;
  total:string;
  ratings_reviews: {
    averageRating: number;
    totalRatings: number;
    ratingCounts: { [key: number]: number };
    topReview: {
      title: string;
      rating: number;
      comment: string;
      author: string;
      date: string;
      likes: number;
      dislikes: number;
    };
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "Digital-Twin",
    icon: "/image6.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 12697,
      ratingCounts: { 5: 8000, 4: 2000, 3: 1000, 2: 500, 1: 1197 },
      topReview: {
        title: "good for timepasss",
        rating: 4,
        comment: "It would be better if this app provides all the features in this desktop version.",
        author: "Priyanko",
        date: "About a month ago",
        likes: 73,
        dislikes: 5,
      },
    },
  },
  {
    id: 2,
    name: "Object-Placement",
    icon: "/object_placement.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is AR application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Great AR app",
        rating: 5,
        comment: "Very intuitive object placement in AR. Highly recommended!",
        author: "User1",
        date: "2 weeks ago",
        likes: 45,
        dislikes: 2,
      },
    },
  },
  {
    id: 3,
    name: "PWC",
    icon: "/pwc.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Impressive VR Experience",
        rating: 5,
        comment: "PWC offers an immersive VR environment. Great for training!",
        author: "User2",
        date: "1 month ago",
        likes: 62,
        dislikes: 3,
      },
    },
  },
  {
    id: 4,
    name: "Xaudio",
    icon: "/xaudio.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Crystal Clear Audio",
        rating: 4,
        comment: "Xaudio provides excellent sound quality in VR environments.",
        author: "AudioPhile",
        date: "3 weeks ago",
        likes: 38,
        dislikes: 1,
      },
    },
  },
  {
    id: 5,
    name: "Xavatar",
    icon: "/xavatar.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Realistic Avatars",
        rating: 5,
        comment: "Xavatar creates incredibly lifelike virtual representations.",
        author: "VREnthusiast",
        date: "1 month ago",
        likes: 55,
        dislikes: 2,
      },
    },
  },
  {
    id: 6,
    name: "Xpresent",
    icon: "/xpresent.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Game-changing Presentations",
        rating: 4,
        comment: "Xpresent transforms how we deliver and experience presentations in VR.",
        author: "PresentationPro",
        date: "2 weeks ago",
        likes: 42,
        dislikes: 1,
      },
    },
  },
  {
    id: 7,
    name: "Xreality",
    icon: "/xreailty.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Blending Realities",
        rating: 5,
        comment: "Xreality seamlessly merges virtual and augmented reality experiences.",
        author: "TechExplorer",
        date: "1 month ago",
        likes: 67,
        dislikes: 3,
      },
    },
  },
  {
    id: 8,
    name: "Xpresent",
    icon: "/xpresent.png",
    screenshots: ["/image3.png", "/image2.png", "/image3.png"],
    description: "This is vr application",
    average:4.1,
    total:"12k",
    ratings_reviews: {
      averageRating: 4.1,
      totalRatings: 1200,
      ratingCounts: { 5: 600, 4: 400, 3: 100, 2: 50, 1: 50 },
      topReview: {
        title: "Revolutionary Presentation Tool",
        rating: 4,
        comment: "Xpresent offers unique ways to engage audiences in virtual environments.",
        author: "VRPresenter",
        date: "3 weeks ago",
        likes: 40,
        dislikes: 2,
      },
    },
  }
];