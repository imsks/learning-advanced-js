class LegacySystem {
    sendSOAPRequest(data) {
        console.log("Sending SOAP request with data: " + data)
    }
}

class ModernSystem {
    sendRESTRequest(data) {
        console.log("Sending REST Request", data)
    }
}

class SOAPToRESTAdapter {
    convertSOAPToREST(data) {
        return "REST"
    }

    convertRESTToSOAP(data) {
        return "SOAP"
    }

    sendRequest(data) {
        const request = this.convertSOAPToREST(data)
        const modernSystem = new ModernSystem()
        const response = modernSystem.sendRESTRequest(request)
        return this.convertSOAPToREST(response)
    }
}

const adapter = new SOAPToRESTAdapter()
console.log(adapter.sendRequest("SOAP"))
