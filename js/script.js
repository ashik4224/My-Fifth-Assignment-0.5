// Button handler 
const blogBtn = document.getElementById('index-page')
const donationBtn = document.getElementById('donation-btn')
const historyBtn = document.getElementById('history-btn')
const faqPageBtn = document.getElementById('index-page')



//Donation Button Click event

donationBtn.addEventListener('click', function(){
    showSectionById('donation-content')

    // Add Class in donation Tab Btn
    donationBtn.classList.add(
      "text-white",
        "bg-[#B4F461]"
    );
        

    // Remove Class From history Tab Btn
    historyBtn.classList.remove(
        "text-white",
        "bg-[#B4F461]"
    );
})

//History Button Click event

historyBtn.addEventListener('click', function(){
    showSectionById('history-section')

    // Add Class in History Tab Btn
    historyBtn.classList.add(
        "text-white",
        "bg-[#B4F461]"
    );

    // Remove Class From donation Tab Btn
    donationBtn.classList.remove(
        "text-white",
        "bg-[#B4F461]"
    );
});



//Blog Button Page Redirect
blogBtn.addEventListener('click', function(){
    window.location.href = 'faq.html';
})


//  Modal
const myModal = document.getElementById('my_modal_5')
const closeModal = document.getElementById('close-modal')




// Donation Area of Noakhli
document.getElementById('donate-btn1')
.addEventListener('click', function(){
    const donateInput1 = inputFieldGetById('donate-input1');
    const donateAmountElement = document.getElementById('donate-amount1');
    const donateAmount1 = parseFloat(donateAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    // Donation Title
    const donateTitle1 = document.getElementById('donate-title1').innerText;

    

    
    // Validation for insufficient Balance
    if(donateInput1 > mainBalance){
        alert('You are not have sufficient Money');
        return;
     }

    // Validatation for input field NaN and empty
    if(isNaN(donateInput1)){
        alert('Please Enter a valid input')
    }
    else if(donateInput1 <=0){
        alert('Please Enter a valid input')
    }



    else{
        donateAmountElement.innerText =donateInput1.toFixed(2);

         // Calculate Balance
         const balance = mainBalance - donateInput1;

         // Update main Balance
        mainBalanceElement.innerText = balance.toFixed(2);

         // Count All Donation
         const totalDonate = donateAmount1 + donateInput1
         donateAmountElement.innerText = totalDonate;
         myModal.showModal(); 


         const history = document.createElement('div')
        history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
        history.innerHTML = `
            <p class="text-lg text-[#ff3b3b]" > <span class="font-bold text-black"> ${donateInput1} Tk. </span>  ${donateTitle1} </p>
            <p class="text-md text-black bg-white p-3 rounded-md " >  ${ new Date().toLocaleString()} </p>
        `
        document.getElementById('history-section').appendChild(history)

    }
   

});



// Donation Area of Feni
document.getElementById('donate-btn2')
.addEventListener('click', function(){
    const donateInput2 = inputFieldGetById('donate-input2');
    const donateAmountElement = document.getElementById('donate-amount2');
    const donateAmount2 = parseFloat(donateAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    // Donation Title
    const donateTitle2 = document.getElementById('donate-title2').innerText;
    
    
    
    // Validation for insufficient Balance
    if(donateInput2 > mainBalance){
        alert('You are not have sufficient Money');
        return;
     }

    // Validatation for input field NaN and empty
    if(isNaN(donateInput2)){
        alert('Please Enter a valid input')
    }
    else if(donateInput2 <=0){
        alert('Please Enter a valid input')
    }



    else{
        donateAmountElement.innerText =donateInput2.toFixed(2);

         // Calculate Balance
         const balance = mainBalance - donateInput2;

         // Update main Balance
        mainBalanceElement.innerText = balance.toFixed(2);

         // Count All Donation
         const totalDonate = donateAmount2 + donateInput2
         donateAmountElement.innerText = totalDonate;
         myModal.showModal();


         const history = document.createElement('div')
        history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
        history.innerHTML = `
            <p class="text-lg text-[#40d41b]" > <span class="font-bold text-black"> ${donateInput2} Tk. </span>  ${donateTitle2} </p>
            <p class="text-md text-black bg-white p-3 rounded-md " >  ${ new Date().toLocaleString()} </p>
        `
        document.getElementById('history-section').appendChild(history)   
    }
   

});




// Donation The Quota Movement
document.getElementById('donate-btn3')
.addEventListener('click', function(){
    const donateInput3 = inputFieldGetById('donate-input3');
    const donateAmountElement = document.getElementById('donate-amount3');
    const donateAmount3 = parseFloat(donateAmountElement.innerText);

    const mainBalanceElement = document.getElementById('main-balance');
    const mainBalance = parseFloat(mainBalanceElement.innerText);

    // Donation Quota  Title
    const donateTitle3 = document.getElementById('donate-title3').innerText;


    // Validation for insufficient Balance
    if(donateInput3 > mainBalance){
        alert('You are not have sufficient Money');
        return;
     }

    // Validatation for input field NaN and empty
    if(isNaN(donateInput3)){
        alert('Please Enter a valid input')
    }
    else if(donateInput3 <=0){
        alert('Please Enter a valid input')
    }



    else{
        donateAmountElement.innerText =donateInput3.toFixed(2);

         // Calculate Balance
         const balance = mainBalance - donateInput3;

         // Update main Balance
        mainBalanceElement.innerText = balance.toFixed(2);

         // Count All Donation
         const totalDonate = donateAmount3 + donateInput3
         donateAmountElement.innerText = totalDonate;
         myModal.showModal(); 


         const history = document.createElement('div')
        history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
        history.innerHTML = `
            <p class="text-lg text-[#1c11ee]" > <span class="font-bold text-black"> ${donateInput3} Tk. </span>  ${donateTitle3} </p>
            <p class="text-md text-black bg-white p-3 rounded-md " >  ${ new Date().toLocaleString()} </p>
        `
        document.getElementById('history-section').appendChild(history)

    }
   

});





