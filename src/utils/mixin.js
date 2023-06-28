export default {
    props: {
        width: {
            type: String
        },
        height: {
            type: String
        },
        centered: {
            type: Boolean
        }
    },
    computed: {
        elementStyles() {
            const styles = {};
            if (this.width) {
                styles['width'] = this.width;
            }
            if (this.height) {
                styles['height'] = this.height;
            }
            if (this.centered) {
                styles['textAlign'] = 'center';
            }

            return styles;
        },
    }
}