export default class Fleet {

    hamburgerMenu() {
        return '#fleetdp';
    }

    menuOptions() {
        return 'div button';
    }

    fleetTypeHeader() {
        return '[formcontrolname="fleetTypeHeader"]'
    }

    fleetTypeNumber() {
        return '[formcontrolname="fleetTypeNumber"]'
    }

    subfleetTypeHeader() {
        return '[formcontrolname="SubfleetTypeHeader"]'
    }

    subfleetTypeNumber() {
        return '[formcontrolname="SubfleetTypeNumber"]'
    }

    subfleetTypeModel() {
        return '[formcontrolname="SubfleetTypeModel"]'
    }

    operationSpecification() {
        return '[formcontrolname="opspec"]'
    }

    operationSpecificationDD() {
        return 'ng-dropdown-panel .ng-option'
    }

    addFleetButton() {
        return 'div button';
    }

    updateFleetTab() {
        return 'div label'
    }

    updateSubfleetType() {
        return '[formcontrolname="subfleetType"]'
    }

    updateSubfleetTypeDD() {
        return 'ng-dropdown-panel .ng-option'
    }

    updateSubfleetBefore() {
        return 'div label'
    }

    updateSubfleetAfter() {
        return 'div label'
    }

    updateSubfleetName() {
        return '[formcontrolname="subfleetOrder"]'
    }

    updateSubfleetOrder() {
        return '[formcontrolname="subfleetOrder"]'
    }

    updateSubfleetOrderDD() {
        return 'ng-dropdown-panel .ng-option-label'
    }

    removeFleetTab() {
        return 'div label'
    }

    removeSubfleetType() {
        return '[formcontrolname="subfleetType"]'
    }

    removeSubfleetDD() {
        return 'ng-dropdown-panel .ng-option-label'
    }

    removeCautionToast() {
        return 'div button'
    }
}
