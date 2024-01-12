export default class USL {

    authorizeWL() {
        return 'Authorization Request';
    }

    //All USL tab selectors
    Usl() {
        return 'Unapproved Service List';
    }

    topHeader() {
        return 'div'
    }

    editMonthPlaceHolder() {
        return 'div'
    }

    calendar() {
        return '.calendar-input'
    }

    dayPick() {
        return 'div [ngbdatepickerdayview]'
    }

    monthPick() {
        return 'ngb-datepicker ngb-datepicker-navigation-select [title="Select month"]'
    }

    yearPick() {
        return 'ngb-datepicker ngb-datepicker-navigation-select [title="Select year"]'
    }

    comment() {
        return 'div'
    }

    save() {
        return 'div button'
    }

    cancel() {
        return 'div button'
    }

    monthPlaceHolder() {
        return '[placeholder="Select Month"]'
    }

    monthDropDown() {
        return 'ng-dropdown-panel .ng-option'
    }

    approvals() {
        return 'APPROVALS'
    }

    rejects() {
        return 'REJECTS'
    }
    
}