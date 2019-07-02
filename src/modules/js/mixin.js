import Foot from 'components/Foot.vue'

let mixin = {
    filters:{
        currency(price){
            return price + '.00';
        }
    },
    components:{
        'Foot':Foot
    }
}

export default mixin;