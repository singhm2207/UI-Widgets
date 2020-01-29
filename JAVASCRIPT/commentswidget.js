(function(){
    const commentButton = document.querySelector("#commentButton");
    const commentTemplate = document.querySelector('#commentsAreaTemplate');
    const commentBox = document.querySelector("#commentsListTitle")
    let commentsList = [];
    class comment{
        constructor(name, comment){
            this.name = name;
            this.comment = comment;
        }
    }
    commentButton.addEventListener("click", function(){
        let commentAdded = document.querySelector("#commentArea textarea").value;
        let commentObj = new comment("test", commentAdded);
        commentsList.push(commentObj);
        updateCommentListView();
    });

    let getCommentView = () => {
        let node;
        if(commentsList.length){
            node = commentTemplate.content.cloneNode(true);            
        }
        return node
    }

    let removeView = (dom) => {
        dom.remove();
    }

    let updateCommentListView = () => {
        document.querySelectorAll('.commentSection').forEach(function(comment){
            removeView(comment);
        });
        commentsList.forEach(comment => {
            let commentView = getCommentView();
            let commentTag = commentView.querySelector("div > p");
            let removeTag = commentView.querySelector(".removeComment");
            commentTag.innerHTML = comment.comment;
            commentBox.appendChild(commentView);
            removeTag.addEventListener("click", (event) =>{
                removeView(event.target.closest('.commentSection'));
            });
        });
    }
})();