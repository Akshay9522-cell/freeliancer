const returnModel=require('../model/model')

const createShipment=async(req,res)=>{
      
      console.log(req.body)
      const{orderId,customer}=req.body
        const payload = {
      awb_assign: true,
      shipment_type: 2, // Return shipment
      order_id: orderId,
      consignee: {
        name: customer.name,
        address: customer.address,
        phone: customer.phone,
        pincode: customer.pincode
      },
      pickup_location: {
        name: "Your Warehouse",
        address: "Warehouse No. 42, Industrial Area, Delhi",
        pincode: "110001",
        phone: "9999999999"
      },
      courier_id: "FAKE_COURIER_123",
      channel_id: "TEST_CHANNEL_456",
      api_token: "FAKE_API_TOKEN_789"
    };

      res.send(payload)
      console.log(payload)
}

module.exports={
    createShipment
}