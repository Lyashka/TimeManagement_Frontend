import {defineStore} from 'pinia'

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: [
            {
                user_id: 5,
                user_name: "Lisa",
                email: "lubrick@mail.ru",
                password: "123456",
                to_do_list: [
                    {
                        to_do_list_id: 2,
                        date_start: "2023-04-10T21:00:00.000Z",
                        list_name: "Лиза гуляет",
                        content: [
                            {
                                case_content_id: 2,
                                content: "Гулять",
                                completed_status: "no",
                                date_completed: "2023-04-10T21:00:00.000Z",
                                id: 3
                            },
                            {
                                case_content_id: 2,
                                content: "Душиться",
                                completed_status: "no",
                                date_completed: "2023-04-10T21:00:00.000Z",
                                id: 4
                            }
                        ]
                    },
                    {
                        to_do_list_id: 6,
                        date_start: "2023-04-13T21:00:00.000Z",
                        list_name: "Patern",
                        content: []
                    }
                ]
            }
        ]
    }),

    getters: {
       
    },

    actions: {
        setCompletedStatus(value){
            console.log(value);
        }
    }
})