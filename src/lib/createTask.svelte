<style lang="scss">
    @import '../style.scss';

    #create-task {
        position: absolute;
        width: 48rem;
        align-self: center;
        background-color: var(--secondColor);
    }

    form {
        width: 100%;
        padding: 0.5rem;
        gap: 0.5rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "task-normal-inputs task-media-inputs" 
        "submit-button submit-button";
    }

    #task-normal-inputs {
        gap: 0.5rem;
        display: flex;
        flex-direction: column;
        grid-area: task-normal-inputs;

    }

    #task-media-inputs {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: task-media-inputs;
    }

    input {
        border: none;
        padding-left: 0.5rem;
        height: 2rem;
        background-color: var(--firstColor);
    }

    #submit-button {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2rem;
        grid-area: submit-button;
    }
</style>

<script>
    /* function handleSubmit() {
        e.preventDefault();

        const newTaskUrlInput = document.forms["create-task-form"]["new-task-url"].value

        if (newTaskUrlInput == "") {
            alert("vc precisa colocar uma url")
            return false;
        }
    } */
</script>

<div id="create-task">
    <div class="title">
        Create task
    </div>

    <form action="http://localhost:3000/create" method="post" id="create-task-form">
        <div id="task-normal-inputs">
            <label for="taskTitle">Title</label>
            <input type="text" id="taskTitle" name="taskTitle">

            <label for="taskUrl">Link</label>
            <input type="url" id="taskUrl" name="taskUrl">
        </div>

        <div id="task-media-inputs">
            To be added in the future
        </div>

        <button type="submit" id="submit-button">
            Create task
        </button>
    </form>
</div>
