import React, { useState } from 'react'

export default function About() {

    const [myStyle, setmyStyle] = useState({

        color: 'black',
        backgroundColor: 'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark myStyle");

    const changemyStyle = () => {


        if (myStyle.color == 'black') {

            setmyStyle({

                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light Mode");
        }
        else{

            setmyStyle({

                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    return (
        <div>
            <button  className="btn btn-dark my-4" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">About</button>

            <div style={myStyle} class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5  className="offcanvas-title" id="offcanvasRightLabel">About</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div  className="offcanvas-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, aperiam. Laboriosam fuga perspiciatis et voluptatum necessitatibus in nostrum ex optio, cum maxime? Nobis facere reprehenderit dolore! Temporibus consectetur, atque voluptatem sed laudantium maxime inventore, aspernatur cum adipisci labore dolorem autem!
                </div>
                <div className="container my-5">
                <button onClick={changemyStyle} type="button" className="btn btn-warning">{btnText}</button>
                </div>
                
            </div>
        </div>
    )
}

