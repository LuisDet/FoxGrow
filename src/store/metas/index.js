export default {
  namespaced: true,
  state() {
    return {
      metas: [
        {
          id: 1,
          icon: 'fas fa-dumbbell',
          title: 'Title',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam velit officia, ducimus idut culpa nostrum esse consequuntur ipsa?',
        },
        {
          id: 2,
          icon: 'fas fa-dumbbell',
          title: 'Title',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam velit officia, ducimus idut culpa nostrum esse consequuntur ipsa?',
        },
        {
          id: 3,
          icon: 'fas fa-dumbbell',
          title: 'Title',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quibusdam velit officia, ducimus idut culpa nostrum esse consequuntur ipsa?',
        },
      ],
    };
  },
  getters: {
    metas(state) {
      return state.metas;
    },
  },
};
