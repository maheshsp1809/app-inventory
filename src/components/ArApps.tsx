import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Slide,
} from "@mui/material";
import { Link } from "react-router-dom";
import Doc1 from "./Docs/image1.png";
import { useState, useEffect } from "react";

const ArApps = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const products = [
    {
      id: 1,
      img: "./image6.png",
      desc: "This is vr application",
      name: "DigitalTwin",
    },
    {
      id: 2,
      img: "./object_placement.png",
      desc: "This is AR application",
      name: "ObjectPlacement",
    },
    {
      id: 3,
      img: "./pwc.png",
      desc: "This is vr application",
      name: "PWC",
    },
    {
      id: 4,
      img: "./xaudio.png",
      desc: "This is vr application",
      name: "Xaudio",
    },
    {
      id: 5,
      img: "./xavatar.png",
      desc: "This is vr application",
      name: "Xavatar",
    },
    {
      id: 6,
      img: "./xpresent.png",
      desc: "This is vr application",
      name: "Xpresent",
    },
    {
      id: 7,
      img: "./xreailty.png",
      desc: "This is vr application",
      name: "Xreality",
    },
    {
      id: 8,
      img: "./xpresent.png",
      desc: "This is vr application",
      name: "Xpresent",
    },
  ];
  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Alert</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please install the .exe file found in the downloads folder
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>OK</Button>
        </DialogActions>
      </Dialog>
      <div className="p-4">
        <Grid container spacing={2}>
          {products.map((item) => (
            <Grid
              item
              xs={2.5}
              key={item.id}
              className="m-4 w-80 justify-center items-center"
            >
              <Card className="rounded-xl shadow-md transition-transform transform hover:scale-105">
                <div className="relative overflow-hidden h-40">
                  <img
                    src={item.img}
                    alt="card"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-2">
                  <p className="text-gray-700">{item.desc}</p>
                  <div className="flex justify-between mt-4">
                    <Link to={`/appDescription/${item.id}`}>
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
    </>
  );
};

export default ArApps;
