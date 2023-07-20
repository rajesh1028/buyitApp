import React from 'react'

function useFormSubmit(scriptURL) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.querySelector("#msg");
        msg.innerHTML = "Message sending";
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent successfully";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            })
            .catch(error => {
                msg.innerHTML = "Failed to send message";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                console.error('Error!', error.message);
            });
    };

    return handleSubmit;
}

const Contact = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbypBkYjbz8vvr5eF5DINkpGHvmqBrV0_BDpEoejgURlbv2YON9d1afyogQHtbg4x2ft/exec';
    const handleSubmit = useFormSubmit(scriptURL);

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form name="submit-to-google-sheet" onSubmit={e => handleSubmit(e)}>
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" name="Name" class="form-control" id="exampleForm" placeholder="John Smith" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" name="Email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" name="Message" id="exampleFormControlTextarea1" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Send Message</button>
                        </form>
                        <span id="msg"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
