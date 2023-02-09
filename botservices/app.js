function chat_begin() {
    var know = {
        "Who are you": "Hello, I am a Bot and I am here to help ",
        "Are you human":"No I am code ",
        "atm near me":"You can find the nearest atm by clicking the Locate ATM  button on the web site ",
        "hi": "Hello, How are you" , 
        "Hi": "Hello, How are you",
        "HI": "Hello, How are you",
        "Hello": "Hello, How are you",
        "hello": "Hello, How are you",
        "how can you help me": "I am so sorry to diasappoint you. I am still learning things coz I am new. But in future I will definately be able to help you in every aspect of our banking service",
        "bank timings":"The Banks are open from 09:00 to 16:00 except Sundays",
        "open bank account":" It will be great to have you, You can mail us on 𝘣𝘢𝘯𝘬𝘪𝘯𝘨𝘣𝘰𝘵@𝘨𝘮𝘢𝘪𝘭.𝘤𝘰𝘮 and we will get in touch with you",
        "how do i reset my password":"You can reset your Internet Banking password online. Youll need your Customer ID (CID) and a registered mobile number",
        "i forgot my customer id": " If you ve forgotten your Customer ID, simply head to the Internet Banking log in page and click on the link that says Forgot your Customer ID?. From there, youll be asked to provide some details to verify your identity (such as your name and date of birth)",
        "access estatement": "You can access any eStatements issued since 1 July 2013 in Internet Banking or the Suncorp App. Simply log in to Internet Banking and select eStatements from the left hand menu to see a list of available statements",
        "get security token":" A Security Token Code is a randomly generated code that’s required to complete certain high-level transactions For example, in order to change your daily limit or transfer more than $3,000 from your account per day, you’ll need a Security Token Code.",
         
        "how are you": "Good :), How about you", 
        "where is the nearest atm": "You can find them by clicking the Locate ATM  button on the web site",
        "i need to open account": "It will be great to have you, You can mail us on 𝘣𝘢𝘯𝘬𝘪𝘯𝘨𝘣𝘰𝘵@𝘨𝘮𝘢𝘪𝘭.𝘤𝘰𝘮 and we will get in touch with you",
        
        thanks: "Thank You So Much ",
        bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("userchat").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("userchat").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("userchat").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}

