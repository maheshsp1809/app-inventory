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
import { useState } from "react";

const ArApps = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
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
      <Grid
        container
        spacing={2}
        style={{ marginTop: "2vh", marginLeft: "18vh" }}
        xs={10}
      >
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <div style={{ width: "100%", height: "80%" }}>
              <img
                src="./image6.png"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/appDescription">
                    <Button>VIEW</Button>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                  <a href="main.exe" download="ColorCheck.exe">
                    <Button onClick={() => setDialogOpen(true)}>
                      DOWNLOAD
                    </Button>
                  </a>
                </Grid>
              </Grid>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ArApps;
