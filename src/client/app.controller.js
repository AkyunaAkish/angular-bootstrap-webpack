class AppController {
    /* @ngInject */
    constructor($bsAlert, $bsAside) {
        this.$bsAlert = $bsAlert;
        this.$bsAside = $bsAside;
        console.log('controller loaded');
    }

    alert() {
        console.log('called alert');
        this.$bsAlert({
            content: 'Alertski',
            controllerAs: 'vm',
            dismissable: true,
            type: 'info'
        });
    }

    aside() {
        console.log('called aside');
        this.$bsAside({
            show: true,
            dataAnimation: "am-slide-right",
            dataPlacement: "right",
            dataContainer: "body"
        });
    }
}

export default AppController;