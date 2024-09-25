
// flood noakhali start

document.getElementById('donation-btn').addEventListener('click', function(event){
    event.preventDefault()
   
    const addInput = document.getElementById('input-flood').value;
    
    if(addInput >= 100 ){
     
        
    }
    else{
      alert('Invalid Amount')
      return "value returnd"
    }
    

    const mainBalance = document.getElementById('my-balance').innerText;
    

    const myBalance = parseFloat(mainBalance);
    const donateMoney = parseFloat(addInput);
    const newBalance = myBalance - donateMoney;
    
    
    document.getElementById('my-balance').innerText = newBalance 

    const floodMoney = document.getElementById('flood').innerText;
    

    const addInputMoney = document.getElementById('input-flood').value;
   

    const floodBalance = parseFloat(floodMoney);
    const donateflood = parseFloat(addInputMoney);
    const newFloodBalance = floodBalance + donateflood;

    document.getElementById('flood').innerText = newFloodBalance
    
    
})


// Noakhali flood ends


// feni flood start


document.getElementById('donation-feni-btn').addEventListener('click', function(event){
  event.preventDefault()
  
  const addInputFeni = document.getElementById('input-feni').value;
  
  if(addInputFeni >= 100 ){
       
        
  }
  else{
    alert('Invalid Amount')
    return "value returnd"
  }

  const feniBalance = document.getElementById('my-balance').innerText;

  const myFeniBalance = parseFloat(feniBalance);
  const donateFeniMoney = parseFloat(addInputFeni);
  const newFeniBalance = myFeniBalance - donateFeniMoney;
  
  document.getElementById('my-balance').innerText = newFeniBalance;

  const feniMoney = document.getElementById('feni-balance').innerText;
  
  const addInputFeniMoney = document.getElementById('input-feni').value;
  
  const feniDonateBalance = parseFloat(feniMoney);
  const balanceDonateFeni = parseFloat(addInputFeniMoney);
  const newFeniMoney = feniDonateBalance + balanceDonateFeni;
  
  document.getElementById('feni-balance').innerText = newFeniMoney
  console.log(newFeniMoney)

})


// feni flood ends



// Quota Movement start

document.getElementById('donation-quota-btn').addEventListener('click', function(event){
  event.preventDefault()

  
  const addInputQuota = document.getElementById('input-quota').value;
  
  
  if(addInputQuota >= 100 ){
       
        
  }
  else{
    alert('Invalid Amount')
    return "value returnd"
  }

  const quotaBalance = document.getElementById('my-balance').innerText;
  
 
  const myQuotaBalance = parseFloat(quotaBalance);
  const donateQuotaMoney = parseFloat(addInputQuota);
  const newQuotaBalance = myQuotaBalance - donateQuotaMoney;
  
  document.getElementById('my-balance').innerText = newQuotaBalance;

  const quotaMoney = document.getElementById('quota-balance').innerText;
  
  const addInputQuotaMoney = document.getElementById('input-quota').value;
  console.log(addInputQuotaMoney)

 

})

// Quota Movement ends  

// donation-tab start

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
  historyTab.classList.add('btn-success')

  donationTab.classList.remove('btn-success')

})

// donation-tab ends
