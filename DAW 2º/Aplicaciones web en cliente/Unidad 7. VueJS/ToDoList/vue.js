const app = Vue.createApp({
    data() {
        return {
            name: "",
            task: {
                taskName: "",
                complete: false,
                priority: 0
            },
            list: JSON.parse(localStorage.getItem('taskList')) || [],
            pendingTasks: 0
        }
    },
    methods: {
        addTask(){
            if(this.task.taskName == "") return;
            this.list.push(this.task);

            this.task = {
                taskName: "",
                complete: false,
                priority: 0
            };
            this.updateList();
        },
        quitTask(index){
            this.list.splice(index, 1);
            this.updateList();
        },
        clearList(){
            this.list = [];
            this.updateList();
        },
        markTask(index){
            this.list[index].complete = !this.list[index].complete;
            this.updateList();
        },
        deleteCompletedTasks(){
            this.list = this.list.filter(task => task.complete == false);
            this.updateList();
        },
        updateList(){
            this.pendingTasks = this.list.filter(task => !task.complete).length;
            this.list.sort((a, b) => b.priority - a.priority);

            localStorage.setItem('taskList', JSON.stringify(this.list));
        },
        lowPriority(index){
            this.list[index].priority = 0;
            this.updateList();
        },
        mediumPriority(index){
            this.list[index].priority = 1;
            this.updateList();
        },
        highPriority(index){
            this.list[index].priority = 2;
            this.updateList();
        }
    },
    mounted(){
        this.updateList();
    }
})

app.mount('.container')