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
        $(function(){
            var page = ['index','about','contact'];
            var pathname = window.location.pathname;

            $('.nav-link').each(function(item){
                if(pathname.includes(pages[item])){
                    $(this).addClass('active');
                    $(this).attr('aria-current', 'page');
                }
            })
        })            
            