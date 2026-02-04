document.getElementById('completeButton').onclick = function() 
{
    let messageDiv = document.getElementById('message');
    messageDiv.innerHTML = <p>Task completed!</p>;
    alert("Task completed! Notification sent.");
};