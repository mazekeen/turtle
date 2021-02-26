<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController as SyomfonyAbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer;
use Symfony\Component\Validator\ConstraintViolationListInterface;

abstract class AbstractController extends SyomfonyAbstractController
{
    /**
     * @param mixed $data
     * @param mixed $groups
     *
     * @return JsonResponse
     */
    public function createResponse($data, $groups = ''): JsonResponse {
        return $this->json(
            $data,
            200,
            [],
            [
                AbstractNormalizer::GROUPS => $groups,
                DateTimeNormalizer::FORMAT_KEY => 'Y-m-d'
            ]
        );
    }

    /**
     * @param ConstraintViolationListInterface $errors
     *
     * @return JsonResponse
     */
    public function createErrors(ConstraintViolationListInterface $errors): JsonResponse {
        $data = [];

        foreach ($errors as $error) {
            $data[$error->getPropertyPath()][] = $error->getMessage();
        }

        return $this->json(
            $data,
            400,
            []
        );
    }
}
