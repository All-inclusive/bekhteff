const express = require("express");
const router = express.Router();
const Products = require("../Models/ProductModel.js");
const verify = require("./VerificationToken.js");

router.get("/", async (req, res) => {
  await Products.findAll().then((products) => res.json(products));
});

router.get("/:id", async (req, res) => {
  await Products.findByPk(req.params.id).then((products) => res.json(products));
});

router.post("/food", async (req, res) => {
  await Products.create({
    name:req.body.name,
    oldPrice:req.body.oldPrice,
    newPrice:req.body.newPrice,
    description:req.body.description,
    category:req.body.category,
    image:req.body.image,
    ownerId:req.body.ownerId,
    expireddate:req.body.expireddate,
    creationDate:req.body.creationDate,
  })
});

router.put("/food/:id", async (req, res) => {
  Products.findByPk(req.params.id).then((products) => {
    products
      .update({
        name:req.body.name,
        oldPrice:req.body.oldPrice,
        newPrice:req.body.newPrice,
        description:req.body.description,
        category:req.body.category,
        image:req.body.image,
        ownerId:req.body.ownerId,
        expireddate:req.body.expireddate,
        creationDate:req.body.creationDate,
      })
      .then((products) => {
        res.json(products);
      });
  });
});
router.post("/clean", async (req, res) => {
    await Products.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      expireddate:req.body.expireddate,
      creationDate:req.body.creationDate,
    })
  });
  
  router.put("/clean/:id", async (req, res) => {
    Products.findByPk(req.params.id).then((products) => {
      products
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          expireddate:req.body.expireddate,
          creationDate:req.body.creationDate,
        })
        .then((products) => {
          res.json(products);
        });
    });
  });
  router.post("/elec", async (req, res) => {
    await Products.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      creationDate:req.body.creationDate,
      device:req.body.device,
     
    })
  });
  
  router.put("/elec/:id", async (req, res) => {
    Products.findByPk(req.params.id).then((products) => {
      products
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          creationDate:req.body.creationDate,
          device:req.body.device,
        })
        .then((products) => {
          res.json(products);
        });
    });
  });
  router.post("/house", async (req, res) => {
    await Products.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      creationDate:req.body.creationDate,
      device:req.body.device,
    })
  });
  
  router.put("/house/:id", async (req, res) => {
    Products.findByPk(req.params.id).then((products) => {
      products
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          creationDate:req.body.creationDate,
          device:req.body.device,
        })
        .then((products) => {
          res.json(products);
        });
    });
  });
  router.post("/clothes", async (req, res) => {
    await Products.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      humanKind:req.body.humanKind,
    })
  });
  
  router.put("/clothes/:id", async (req, res) => {
    Products.findByPk(req.params.id).then((products) => {
      products
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          humanKind:req.body.humanKind,
        })
        .then((products) => {
          res.json(products);
        });
    });
  });
  router.post("/fourni", async (req, res) => {
    await Products.create({
      name:req.body.name,
      oldPrice:req.body.oldPrice,
      newPrice:req.body.newPrice,
      description:req.body.description,
      category:req.body.category,
      image:req.body.image,
      ownerId:req.body.ownerId,
      type:req.body.type,
    })
  });
  
  router.put("/fourni/:id", async (req, res) => {
    Products.findByPk(req.params.id).then((products) => {
      products
        .update({
          name:req.body.name,
          oldPrice:req.body.oldPrice,
          newPrice:req.body.newPrice,
          description:req.body.description,
          category:req.body.category,
          image:req.body.image,
          ownerId:req.body.ownerId,
          type:req.body.type,
        })
        .then((products) => {
          res.json(products);
        });
    });
  });
router.delete("/:id", async (req, res) => {
  await Products.findByPk(req.params.id)
    .then((products) => {
      products.destroy();
    })
    .then(() => {
      res.json("deleted");
    });
});

router.delete("/", async (req, res) => {
  await Products.destroy({ where: {}, truncate: true }).then(() =>
    res.json("cleared")
  );
});

module.exports = router;