function addingEventListener() {
    const input = document.getElementById('input'); // assigning the input variable to an element grabber
    input.addEventListener('click', // adding the event listener to trigger the event
    function(event){ // the arg is the event name listening for
        alert('I was clicked!') // the event that gets triggered
    })
}
