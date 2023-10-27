<style lang="scss">
    @import '../style.scss';

    .task {
        background-color: var(--secondColor);
        height: 3.5rem;
        width: 100%;
        display: flex;
        padding: 0.5rem;
        gap: 0.5rem;
    }

    .general-info {
        flex-grow: 1;
    }

    .task-title {
        height: 50%;
        font-size: large;
        display: flex;
        align-items: center;
    }

    .task-url {
        height: 50%;
        font-size: small;
        display: flex;
        align-items: center;
    }

    .task-actions {
        flex-shrink: 0;
        width: 14rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    #delete:hover {
        background-color: var(--red);
    }

    .task:hover {
        outline: var(--green) solid 1px;
    }
</style>

<script>
    import DownloadImageIcon from '../assets/image.svg';
    import DownloadVideoIcon from '../assets/video.svg';
    import DownloadAudioIcon from '../assets/audio.svg';
    import TrashIcon from '../assets/trash.svg';
    import MenuIcon from '../assets/menu.svg';

    export let taskTitle, taskUrl
</script>

<div class="task">
    <div class="general-info">
        <div class="task-title">
            {taskTitle}
        </div>

        <div class="task-url">
            {taskUrl}
        </div>
    </div>

    <div class="task-actions">
        <button id="delete" title="Delete task">
            <img src={TrashIcon} alt="TrashIconss">
        </button>
        <button id="download-video" title="Download video from task">
            <img src={DownloadVideoIcon} alt="DownloadVideoIcon">
        </button>
        <button id="download-audio" title="Download audio from task">
            <img src={DownloadAudioIcon} alt="DownloadAudioIcon">
        </button>
        <button id="download-image" title="Download image from task">
            <img src={DownloadImageIcon} alt="DownloadImageIcon">
        </button>
        <button id="menu">
            <img src={MenuIcon} alt="MenuIcon">
        </button>
    </div>
</div>