import React, { Fragment } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CampusInput from "./campusinput/campusinput";

import {
  Button,
  Navbar,
  Container,
  Jumbotron,
  Alert,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import "./style.css";
import { FaHeart } from "react-icons/fa";
import {sheet1,sheet2} from "./data";
import {sheet11,sheet22} from "./data-chennai.json";
export default function App() {
  
  const [campus, setCampus] = React.useState("");
  const [open, setOpen] = React.useState(true);
  // "homepage": "https://github.com/shwetanshutech/communityGroups#readme"
  React.useEffect(() => {
    if (campus) {
      setOpen(false);
    }
  }, [campus]);
  let s1,s2;
  let link1;
  if(campus==="vellore"){ s1=sheet1; s2=sheet2; link1="https://www.instagram.com/vitrendz/"}
  else{s1=sheet11;s2=sheet22;link1="https://www.instagram.com/vitrendz_chennai/"}

return (
    <>
      <div class="body">
        <Navbar bg="dark" >
          <Container>
            <Navbar.Brand href="https://www.vitrendz.com" target="_blank">
              <img
                src="https://drive.google.com/thumbnail?id=10bwXdT0UY1ElXcGkHDHiN3jpRSPEnQaQ"
                className="d-inline-block align-top navLogo"
                alt="logo"
              />
            </Navbar.Brand>
            {/* <CampusInput campus={campus} setCampus={setCampus} style={{color:'white'}}/> */}
          </Container>
        </Navbar>
        <Dialog fullWidth={true} maxWidth={"sm"} open={open}>
          <DialogTitle id="max-width-dialog-title">
            Welcome to VITrendz Community Groups app!
          </DialogTitle>
          <DialogContent
            style={{
              display: "flex",
              alignItems: "center",
              padding: "25px",
            }}
          >
            <DialogContentText>
              Please select a campus before proceeding :
            </DialogContentText>
            <CampusInput campus={campus} setCampus={setCampus} />
          </DialogContent>
        </Dialog>
        <Container Fluid>
          <div class="appBody">
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col md={12}>
                <Alert class="alert alert-warning" role="alert">
                  <div id="grades">
                    Welcome! <strong> VITrendz Community </strong>[ Use Ctrl+F
                    or Find for easy Navigation! ]. Both Whatsapp and Telegram
                  </div>
                </Alert>
              </Col>
            </Row>
            <Jumbotron Fluid class="jumbotron complete">
              <div class="card-container p-4 centered has-box-shadow row">
                <div class="col-lg-1"></div>
                <div class="col-lg-10 col-sm-12 col-xs-12 centered">
                  <h1 class="ding">VITrendz Whatsapp Community</h1>
                  <Container Fluid>
                    <Row class="head">
                      <div
                        class="form-control d-xl-block col-xl title splpd"
                        name="gnameto"
                      >
                        Group Name
                      </div>
                      <div
                        class="form-control d-xl-block col-xl title splpd"
                        name="glinkto"
                      >
                        Group Link
                      </div>
                      <div
                        class="form-control d-xl-block col-xl title splpd"
                        name="spamto"
                      >
                        Spam
                      </div>
                    </Row>
                  </Container>
                  <br />
                  {s1.map((item, i) => (
                    <Fragment key={i}>
                      <Container Fluid>
                        <Row>
                          <div
                            class="form-control d-xl-block col-xl splpd"
                            name="gname"
                          >
                            {item["Group Name"]}
                          </div>
                          <div
                            class="form-control d-xl-block col-xl splpd"
                            name="glink"
                          >
                            <a href={item["Group Link"]} target="_new">
                              Link
                            </a>
                          </div>
                          <div
                            class="form-control d-xl-block col-xl splpd"
                            name="spam"
                          >
                            {item["SPAMMING"]}
                          </div>
                        </Row>
                        <br />
                      </Container>
                    </Fragment>
                  ))}
                  <h1 class="ding">VITrendz Telegram Community</h1>
                  <Container Fluid>
                    <Row class="head">
                      <div
                        class="form-control d-xl-block col-xl title splpd"
                        name="gnameto"
                      >
                        Group Name
                      </div>
                      <div
                        class="form-control d-xl-block col-xl title splpd"
                        name="glinkto"
                      >
                        Group Link
                      </div>
                      <div
                        class="form-control d-xl-block col-xl title splpd"
                        name="spamto"
                      >
                        Spam
                      </div>
                    </Row>
                  </Container>
                  <br />
                  {s2.map((item, j) => {
                    return item.gnamet === "" ? null : (
                      <Fragment key={j}>
                        <Container Fluid>
                          <Row>
                            <div
                              class="form-control d-xl-block col-xl splpd"
                              name="gnamet"
                            >
                              {item["Group Name"]}
                            </div>
                            <div
                              class="form-control d-xl-block col-xl splpd"
                              name="glinkt"
                            >
                              <a href={item["Group Link"]} target="_new">
                                Link
                              </a>
                            </div>
                            <div
                              class="form-control d-xl-block col-xl splpd"
                              name="spamt"
                            >
                              {item["SPAMMING"]}
                            </div>
                          </Row>
                          <br />
                        </Container>
                      </Fragment>
                    );
                  })}
                  <section>
                    <a
                      href={link1}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          class="gbtn btn btn-block"
                          size="lg"
                          id="gbtn"
                        >
                          Follow Us for More Updates
                        </Button>
                      </div>
                    </a>
                    <p class="vitrends">
                      Created with <FaHeart /> by VITrendz
                    </p>
                  </section>
                </div>
              </div>
         <div
                class="modal fade"
                id="modal-error"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title text-danger" id=" modal-title">
                        Error
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body" id="modal-body"></div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Got it
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <script
                language="javascript"
                type="text/javascript"
                src="calculator.js"
              ></script>
            </Jumbotron>
          </div>
        </Container>
      </div>
    </>
  );
}
