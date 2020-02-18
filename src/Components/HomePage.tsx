import * as React from 'react';
import {Navbar,Container,Section,Level,Box} from "react-bulma-components";
import Headlines from "./Headlines";
import Feeders from "./Feeders";
const HomePage: React.FunctionComponent<{


}> = (props) => {

    return (
        <div>

            <Navbar>
                <Navbar.Menu>

                        <a className="navbar-item" href="#">
                            business
                        </a>



                    <a className="navbar-item" href="#">
                        entertainment
                    </a>




                        <a className="navbar-item" href="#">
                            general
                        </a>



                        <a className="navbar-item" href="#">
                            health
                        </a>




                        <a className="navbar-item" href="#">
                            science
                        </a>



                        <a className="navbar-item" href="#">
                            sports
                        </a>



                        <a className="navbar-item" href="#">
                            technology
                        </a>

                </Navbar.Menu>
            </Navbar>




      <Section>
         <Box>

<div className="lefts">
    <Feeders/>

</div>


                <div className="right">

                 <Headlines/>


                </div>




         </Box>




      </Section>


        </div>
    )
};

export default HomePage;
