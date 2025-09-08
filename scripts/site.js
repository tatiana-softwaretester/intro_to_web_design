function ClearForm(){
            document.getElementById("contactForm").reset();
        }

function hidePTags(){
        let ptags = document.getElementsByTagName('p');
        for(let item of ptags){
            item.style.visibility = 'hidden';
            item.style.display = 'none';
            }
            }

$('#jqueryBtn').click(function(){
$('p').hide();
            })