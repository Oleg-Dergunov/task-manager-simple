document.getElementById('completeButton').onclick = function() 
{
    let messageDiv = document.getElementById('message');
    messageDiv.innerText = `Task completed!`;
    alert("Task completed! Notification sent.");
};