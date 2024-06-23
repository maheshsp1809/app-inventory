import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
} from "@mui/material";

const Home = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      img: "image2.png",
    },
    {
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "image3.png",
    },
    {
      title: "Third slide label",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      img: "image1.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative mt-4 mx-4 overflow-hidden">
        <div className="flex h-80">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform transform duration-1500 ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center bg-gradient-to-r from-sky-600 to-amber-200 h-full rounded-lg overflow-hidden">
                <div className="h-full w-auto p-4 flex flex-col justify-center items-center">
                  <h3 className="text-5xl font-bold text-white mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-3xl font-semibold text-neutral-700">
                    {slide.description}
                  </p>
                </div>
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="p-4">
        <Grid container spacing={2}>
          {[
            {
              img: "./image6.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
            {
              img: "./object_placement.png",
              desc: "This is AR application",
              name: "DigitalTwin",
            },
            {
              img: "./pwc.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
            {
              img: "./xaudio.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
            {
              img: "./xavatar.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
            {
              img: "./xpresent.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
            {
              img: "./xreailty.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
            {
              img: "./xpresent.png",
              desc: "This is vr application",
              name: "DigitalTwin",
            },
          ].map((item, index) => (
            <Grid item xs={3} key={index} className="m-4 w-80">
              <Card className="rounded-xl shadow-md transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden h-40">
                  <img
                    src={item.img}
                    alt="card"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700">{item.desc}</p>
                  <div className="flex justify-between mt-4">
                    <Link to="/appDescription" state={{ desc: item.desc }}>
                      <Button className="bg-blue-950 text-white font-bold text-lg px-6 py-2 rounded-lg hover:bg-blue-800">
                        View
                      </Button>
                    </Link>
                    <a href="main.exe" download="ColorCheck.exe">
                      <Button
                        className="bg-blue-950 text-white font-bold text-lg px-6 py-2 rounded-lg hover:bg-blue-800"
                        onClick={() => setDialogOpen(true)}
                      >
                        Download
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please run the .exe file in the downloads folder
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
