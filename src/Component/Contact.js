import React, { useState } from 'react'

export const Contact = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  // https://run.mocky.io/v3/7d2d5cac-7635-42ad-8846-5178ef777d40

  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const emailHandler = (e) => {
    setEmail(e.target.value);
  }

  const adressHandler = (e) => {
    setAdress(e.target.value);
  }

  const dataHandler = (e) => {
    e.preventDefault();
    console.log({ fullName, email, adress });
    let data = { fullName, email, adress };
    fetch("https://run.mocky.io/v3/7d2d5cac-7635-42ad-8846-5178ef777d40", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log("result", result);
      if (result.status === 200) {
        alert("Your order book sucessfully");
        setName('');
        setAdress('');
        setEmail('');
      }
      else {
        console.log("something went wrong");
      }
    })


  }

  return (
    <div id="contact">
      <h1>Book your order</h1>
      <form>
        <input type="text" placeholder='full name' value={fullName} onChange={nameHandler} />
        <input type="email" placeholder='type your E-mail' value={email} onChange={emailHandler} />
        <textarea placeholder='Write here adress' value={adress} onChange={adressHandler}></textarea>

        <button className='btn btn-danger' onClick={dataHandler}>BOOK </button>
        <label>Only COD available</label>
      </form>
    </div>
  )
}
