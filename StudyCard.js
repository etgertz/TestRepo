class StudyCard{
    static cards = 0;

    constructor(front, back){
        this.front = front;
        this.back = back;
        this.box = 0;
        this.isFlipped = false;
        StudyCard.cards++;
    }

    flip(){
        this.isFlipped = !this.isFlipped;
    }

}
