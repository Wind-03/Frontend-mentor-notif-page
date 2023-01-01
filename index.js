function clearNotification(){
    let mark_el= document.querySelectorAll(".notification-sign")
    let notification = document.getElementById("notification_number")
    console.log(notification)
    
    notification.innerText = 0
    for (let element of mark_el) {
        element.style.display == 'inline-block'
        element.style.display = 'none'
    }
}
