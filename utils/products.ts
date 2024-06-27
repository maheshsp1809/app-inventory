export interface Product {
    id: number;
    icon: string;
    averageRating: number;
    ratingsCount: number;
    screenshots: string[];
    description: string;
    reviews: { user: string; rating: number; comment: string }[];
  }
  
export const products : Product[] =  [
    {
      id: 1,
      icon: "./image6.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 2,
      icon: "./object_placement.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is AR application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 3,
      icon: "./pwc.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 4,
      icon: "./xaudio.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 5,
      icon: "./xavatar.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 6,
      icon: "./xpresent.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 7,
      icon: "./xreailty.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    },
    {
      id: 8,
      icon: "./xpresent.png",
      averageRating: 4.1,
      ratingsCount: 1200,
      screenshots: ["/image1.png", "/image3.png"],
      description: "This is vr application",
      reviews: [
        { user: "User1", rating: 5, comment: "Great product!" },
        { user: "User2", rating: 4, comment: "Very useful." }
      ]
    }
  ];
  